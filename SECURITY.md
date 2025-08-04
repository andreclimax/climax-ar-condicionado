# Segurança do Site Climax Ar Condicionado

## 🔒 Medidas de Segurança Implementadas

### Headers de Segurança

O site implementa os seguintes headers de segurança:

- **X-Content-Type-Options**: `nosniff` - Previne MIME type sniffing
- **X-Frame-Options**: `DENY` - Protege contra clickjacking
- **X-XSS-Protection**: `1; mode=block` - Proteção contra XSS
- **Referrer-Policy**: `strict-origin-when-cross-origin` - Controle de referrer
- **Strict-Transport-Security**: `max-age=31536000; includeSubDomains; preload` - Força HTTPS
- **Content-Security-Policy**: Política restritiva para recursos
- **Permissions-Policy**: Restringe acesso a recursos do navegador
- **Cross-Origin Policies**: Proteção contra ataques cross-origin

### Configurações de Segurança

#### Next.js
- HTTPS forçado com redirecionamento automático
- PoweredByHeader desabilitado
- React Strict Mode habilitado
- Console removido em produção
- Compressão habilitada

#### Middleware
- Headers de segurança aplicados em todas as requisições
- Cache control adequado para assets estáticos
- Headers específicos para APIs (sem cache)

### Validação de Entrada

#### Utilitários de Segurança (`src/utils/security.ts`)
- `sanitizeInput()`: Remove caracteres perigosos
- `validateEmail()`: Validação de email
- `validatePhone()`: Validação de telefone brasileiro
- `checkRateLimit()`: Rate limiting por IP
- `validateCSRFToken()`: Validação de CSRF

### Rate Limiting

Implementação básica de rate limiting:
- 100 requisições por IP a cada 15 minutos
- Configurável via variáveis de ambiente
- Cache em memória para controle

## 🚀 Como Usar

### Variáveis de Ambiente

Copie o arquivo `env.example` para `.env.local` e configure:

```bash
# Google Search Console Verification Code
GOOGLE_VERIFICATION_CODE=seu-codigo-aqui

# Configurações de Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Validação em Formulários

```typescript
import { sanitizeInput, validateEmail, validatePhone } from '@/utils/security';

// Exemplo de uso
const nome = sanitizeInput(formData.get('nome') as string);
const email = formData.get('email') as string;

if (!validateEmail(email)) {
  return new Response('Email inválido', { status: 400 });
}
```

### Rate Limiting em APIs

```typescript
import { checkRateLimit } from '@/utils/security';

export async function POST(request: NextRequest) {
  const rateLimit = checkRateLimit(request);
  
  if (!rateLimit.allowed) {
    return new Response('Rate limit excedido', { status: 429 });
  }
  
  // ... resto da lógica
}
```

## 🔍 Monitoramento

### Logs de Segurança

O sistema registra eventos de segurança:

```typescript
import { logSecurityEvent } from '@/utils/security';

logSecurityEvent('rate_limit_exceeded', {
  ip: request.headers.get('x-forwarded-for'),
  path: request.nextUrl.pathname
});
```

## 📋 Checklist de Segurança

- [x] Headers de segurança implementados
- [x] HTTPS forçado
- [x] Validação de entrada
- [x] Rate limiting
- [x] CSP configurado
- [x] HSTS habilitado
- [x] Cross-origin policies
- [x] Permissions policy
- [x] Console removido em produção
- [x] PoweredByHeader desabilitado

## 🛡️ Próximas Melhorias

1. **Implementar CSRF tokens** para formulários
2. **Adicionar logging estruturado** para eventos de segurança
3. **Implementar monitoramento** de tentativas de ataque
4. **Adicionar validação de upload** de arquivos
5. **Implementar autenticação** se necessário

## 📞 Suporte

Para questões de segurança, entre em contato com a equipe de desenvolvimento.

---

**Última atualização**: Janeiro 2025
**Versão**: 1.0.0 