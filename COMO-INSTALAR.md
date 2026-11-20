# Finanças da casa: como publicar e instalar

Endereço do app: **https://vivirosasjc.github.io/financas/**
Repositório: https://github.com/vivirosasjc/financas

## 1. Terminar a configuração do Firebase (uma vez só)

No console do Firebase (console.firebase.google.com), projeto **financas-a8955**:

1. **Regras do banco:** Firestore Database → aba **Regras**. Apague tudo o que estiver lá, cole o conteúdo do arquivo `firestore.rules` (que veio fora desta pasta) e clique em **Publicar**.
2. **Login por e-mail e senha:** Authentication → **Método de login** → **Adicionar novo provedor** → **E-mail/senha** → ative a primeira chave → **Salvar**. (O login com Google já está ativo.)
3. **Endereço autorizado:** Authentication → **Configurações** → **Domínios autorizados** → **Adicionar domínio** → `vivirosasjc.github.io` → **Adicionar**.

## 2. Publicar no GitHub Pages

1. Abra https://github.com/vivirosasjc/financas e clique em **Add file → Upload files**.
2. Arraste **todo o conteúdo desta pasta** (index.html, manifest.json, sw.js, COMO-INSTALAR.md e a pasta icons). Se já existirem, eles são substituídos. Clique em **Commit changes**.
3. Se ainda não ativou: **Settings → Pages → Branch: main, pasta / (root) → Save**.
4. Em 1 a 2 minutos o app estará em https://vivirosasjc.github.io/financas/

## 3. Entrar e instalar

- **Computador e Android:** abra o endereço e use **Entrar com Google**. Para instalar: no computador, clique no ícone de instalar na barra de endereço (Chrome ou Edge); no Android, toque em **⋮ → Instalar app**.
- **iPhone:** no Safari, toque em **Compartilhar → Adicionar à Tela de Início**. Dentro do app instalado no iPhone, o login com Google não funciona (limitação da Apple). Use **Criar conta** com o mesmo e-mail Gmail e uma senha, confirme pelo link que chega no e-mail e depois toque em **Já confirmei**. Os dados são os mesmos que você vê ao entrar com Google.

## 4. Trazer os lançamentos da versão antiga

Se você já lançou contas no app antigo (sem sincronização), abra o novo **no mesmo aparelho e no mesmo navegador**, entre e vá em **Ajustes**. Vai aparecer **Dados antigos deste aparelho → Enviar para a nuvem**. Toque uma vez.

## 5. Liberar o André

1. No Firebase, Firestore Database → **Regras**.
2. Na linha `// , 'email.do.andre@gmail.com'`, apague as duas barras `//` do começo e troque o e-mail pelo dele. Deve ficar assim:
   ```
   'vivi.cristina.sjc@gmail.com'
   , 'email.do.andre@gmail.com'
   ```
3. Clique em **Publicar**. Ele abre o mesmo endereço e entra com a conta dele.

Até isso ser feito, se ele tentar entrar, verá a mensagem "não tem acesso a este app". Nada é exposto.

## 6. Sobre os dados

- Ficam no Firebase (plano gratuito) e sincronizam na hora entre todos os aparelhos.
- Sem internet, o app continua funcionando e envia as mudanças quando a conexão volta.
- Só os e-mails listados nas regras conseguem ler ou gravar.
- **Ajustes → Backup → Exportar** gera uma cópia extra em arquivo. Vale fazer de vez em quando.

## 7. Como usar

- **Mês no topo:** use ‹ e › para navegar.
- **Contas → +:** escolha *Fixa* (repete todo mês) ou *Variável*, a categoria e quem paga. Toque no círculo para marcar como paga: data e hora entram sozinhas e podem ser corrigidas abrindo a conta. Há um campo de **Observação**.
- **Cartão → +:** cartão, categoria, de quem é o gasto, parcelas e o valor da parcela ou o total, e o mês da 1ª parcela. Em **Faturas do mês**, cada pessoa marca a própria parte como paga.
- **Resumo:** total do mês, quanto cabe a cada um, o que falta pagar, faturas e categorias.
- **Ajustes:** nomes, categorias, cartões, backup e sair da conta.

## 8. Atualizar o app depois

Se mudar o `index.html`, aumente o número em `financas-v4` no `sw.js` (ex.: `financas-v5`) e envie os dois arquivos de novo.
