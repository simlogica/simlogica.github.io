# Configurando o Blocker

<img src="/common/images/blocker_feature_graphic.png" style="max-width: 100%; height: auto;" alt="Blocker Feature Banner">

## Configurando as Permissões do Blocker

O Blocker precisa de duas permissões do seu dispositivo Android para funcionar corretamente.

### Permissão de Contatos

O Blocker usa a permissão de contatos para gerenciar a chamada recebida. O número que recebido é comparado com a sua Agenda Telefônica para verificar se é um número **Favorito**, um **Contato** regular na sua Agenda ou se é **Desconhecido**.

Quando o Blocker é iniciado, ele solicita a **Permissão de Contatos** por meio de um banner de alerta no topo da tela/ecrã. Clique nesse banner e o Android irá pedir que você permita o acesso.

<img src="/configure/permissions1.png" style="max-width: 40%; height: auto;" alt="Banner superior do Blocker solicitando permissão de acesso aos Contatos">
<img src="/configure/permissions2.png" style="max-width: 40%; height: auto;" alt="Modal do Android pedindo para conceder ao Blocker a permissão de acesso aos Contatos">

Se você negar acidentalmente, siga a seção [Concedendo manualmente a Permissão de Contatos](#concedendo-manualmente-a-permissao-de-contatos).

### Definindo o Blocker como App de Identificação de Chamadas e Antispam do dispositivo

O Blocker precisa ser o **App de Identificação de Chamadas e Antispam** do seu dispositivo para poder gerenciar as chamadas recebidas.

<img src="/configure/permissions3.png" style="max-width: 40%; height: auto;" alt="Banner superior do Blocker solicitando ser o app de Identificação de Chamadas no seu dispositivo">
<img src="/configure/permissions4.png" style="max-width: 40%; height: auto;" alt="Modal do Android pedindo para definir o Blocker como o app de Identificação de Chamadas">

Internamente, isso permitirá que um serviço do Blocker, pequeno e rápido, desenvolvido em código nativo, seja acionado pelo Sistema Android. Esse serviço fará a sua mágica com base nas regras e sons que você configurou no Blocker.

Nenhum dado é coletado, como nunca nos cansamos de repetir. Confira a nossa [Política de Privacidade](../privacy/index.md)

### Concedendo manualmente a Permissão de Contatos

Caso você tenha negado anteriormente a **Permissão de Contatos**, o Android exige uma configuração manual um pouco mais elaborada, que tornamos simples de seguir em quatro passos fáceis.

O Blocker irá solicitar a **Permissão de Contatos** como de costume, mas quando você clicar no banner superior, a **Tela/Ecrã de Configuração do App** será exibida no lugar. Clique em **Permissões** lá:

<img src="/configure/permissions1.png" style="max-width: 40%; height: auto;" alt="Banner superior do Blocker solicitando permissão de acesso aos Contatos">
<img src="/configure/permissions5.png" style="max-width: 40%; height: auto;" alt="Tela/Ecrã de Configuração do Sistema para permitir acesso aos Contatos, passo 1">

Em seguida, clique em **Contatos** e depois em **Permitir** na tela/ecrã seguinte:

<img src="/configure/permissions6.png" style="max-width: 40%; height: auto;" alt="Tela/Ecrã de Configuração do Sistema para permitir acesso aos Contatos, passo 2">
<img src="/configure/permissions7.png" style="max-width: 40%; height: auto;" alt="Tela/Ecrã de Configuração do Sistema para permitir acesso aos Contatos, passo 3">

É isso! Em seguida, pressione o botão Voltar do Android três vezes para retornar ao Blocker.