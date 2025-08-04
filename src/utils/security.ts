import { NextRequest } from 'next/server';

// Cache simples para rate limiting
const rateLimitCache = new Map<string, { count: number; resetTime: number }>();

/**
 * Validação de entrada para prevenir ataques XSS e injeção
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') {
    return '';
  }
  
  // Remove caracteres perigosos
  return input
    .replace(/[<>]/g, '') // Remove < e >
    .replace(/javascript:/gi, '') // Remove javascript:
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
}

/**
 * Validação de email
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validação de telefone brasileiro
 */
export function validatePhone(phone: string): boolean {
  const phoneRegex = /^(\+55\s?)?(\(?\d{2}\)?\s?)?(\d{4,5}-?\d{4})$/;
  return phoneRegex.test(phone);
}

/**
 * Rate limiting simples
 */
export function checkRateLimit(request: NextRequest): { allowed: boolean; remaining: number } {
  const ip = request.headers.get('x-forwarded-for') || 
             request.headers.get('x-real-ip') || 
             'unknown';
  
  const windowMs = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'); // 15 minutos
  const maxRequests = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100');
  
  const now = Date.now();
  const key = `rate_limit_${ip}`;
  
  const current = rateLimitCache.get(key);
  
  if (!current || now > current.resetTime) {
    // Primeira requisição ou janela expirada
    rateLimitCache.set(key, {
      count: 1,
      resetTime: now + windowMs
    });
    return { allowed: true, remaining: maxRequests - 1 };
  }
  
  if (current.count >= maxRequests) {
    return { allowed: false, remaining: 0 };
  }
  
  // Incrementa contador
  current.count++;
  rateLimitCache.set(key, current);
  
  return { allowed: true, remaining: maxRequests - current.count };
}

/**
 * Headers de segurança para APIs
 */
export function getSecurityHeaders(): Record<string, string> {
  return {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self';",
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()',
    'Cross-Origin-Embedder-Policy': 'require-corp',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Resource-Policy': 'same-origin',
  };
}

/**
 * Validação de CSRF token (para formulários)
 */
export function validateCSRFToken(token: string, sessionToken?: string): boolean {
  if (!token || !sessionToken) {
    return false;
  }
  
  // Implementação básica - em produção, use uma biblioteca como csurf
  return token === sessionToken;
}

/**
 * Log de segurança
 */
export function logSecurityEvent(event: string, details: Record<string, unknown>): void {
  console.log(`[SECURITY] ${event}:`, {
    timestamp: new Date().toISOString(),
    ...details
  });
} 