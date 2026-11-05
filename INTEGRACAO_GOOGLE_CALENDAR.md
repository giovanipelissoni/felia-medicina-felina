# Guia de Integração com Google Calendar - FELIA Medicina Felina & Cat Sitting

Este documento orienta como integrar o formulário e agendamentos do site diretamente com o **Google Calendar da Dra. Gabriella Paiva e da Giovana Madureira**, para que qualquer solicitação ou agendamento caia automaticamente na agenda de ambas no celular.

---

## Opção 1: Páginas de Agendamento Nativas do Google Agenda (Mais Fácil e 100% Gratuito)

O próprio Google Calendar possui a funcionalidade de **"Agendamento de Horários" (Appointment Schedule)**.

### Como configurar passo a passo:
1. Abra o [Google Agenda](https://calendar.google.com) no computador (pode ser na conta `feliaspetcare@gmail.com` ou de uma delas).
2. Clique no botão superior esquerdo **"+ Criar"** e selecione **"Agendamento de horários"**.
3. Defina as regras:
   - **Título**: `Consulta Felina Domiciliar / Cat Sitting - FELIA`
   - **Duração**: Ex: 1 hora ou 1 hora e 30 min.
   - **Dias e horários de atendimento**: Ex: Segunda a Sexta das 08h às 18h, Sábado das 08h às 13h.
   - **Janela de agendamento**: Com pelo menos 1 dia de antecedência.
   - **Campos do formulário de reserva**: Nome do Tutor, Telefone/WhatsApp, Bairro de Guarulhos/SP, Nome do Gatinho e Serviço Desejado.
4. **Para sincronizar nas agendas de ambas:**
   - Adicione a outra pessoa como co-organizadora ou participante automática (`Convidar pessoas`).
   - Ambas receberão a notificação e o evento ficará fixado nos dois calendários simultaneamente.
5. **Como colocar no site:**
   - O Google Agenda gera um botão de **"Compartilhar"**.
   - Você pode copiar o link direto ou o código de incorporação (`<iframe>`) e colar na seção `#agendamento` do `index.html`.

---

## Opção 2: Formulário do Site -> Google Sheets -> Google Calendar Automático (Via Google Apps Script)

Se você preferir manter o design atual do formulário personalizado do site e fazer com que ele crie o evento automaticamente nas agendas do Google, basta usar o **Google Apps Script** (gratuito e sem mensalidades).

### Passo 1: Criar a Planilha no Google Drive
1. Crie uma nova planilha no Google Sheets com o nome **"FELIA - Agendamentos e Leads"**.
2. Na primeira linha (cabeçalho), coloque:
   - `Data/Hora do Envio` | `Nome Tutor` | `WhatsApp` | `Cidade` | `Bairro` | `Nome do Gato` | `Serviço` | `Data Preferencial` | `Período` | `Observações`

### Passo 2: Adicionar o Código do Google Apps Script
1. Na planilha, clique no menu **Extensões** > **Apps Script**.
2. Apague o conteúdo existente e cole o código abaixo:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // 1. Grava os dados na planilha
    sheet.appendRow([
      new Date(),
      data.tutorName,
      data.whatsapp,
      data.cidade,
      data.bairro,
      data.catName,
      data.service,
      data.preferredDate,
      data.preferredShift,
      data.notes || ''
    ]);

    // 2. Criação do evento no Google Calendar de ambas
    var emailsNotificacao = [
      'feliaspetcare@gmail.com' // substitua pelos e-mails da Gabriella e Giovana
    ];

    var tituloEvento = '🐾 [FELIA] ' + data.service + ' - Gatinho: ' + data.catName + ' (Tutor: ' + data.tutorName + ')';
    var descricaoEvento = 
      'Tutor(a): ' + data.tutorName + '\n' +
      'WhatsApp: ' + data.whatsapp + '\n' +
      'Endereço/Região: ' + data.bairro + ' - ' + data.cidade + '\n' +
      'Paciente: ' + data.catName + '\n' +
      'Serviço: ' + data.service + '\n' +
      'Período desejado: ' + data.preferredShift + '\n' +
      'Observações: ' + (data.notes || 'Nenhuma');

    // Cria o evento na agenda padrão e convida ambas
    var calendar = CalendarApp.getDefaultCalendar();
    
    // Define horário provisório (ex: no dia escolhido às 09:00 ou dia seguinte)
    var dataAgendamento = new Date();
    if (data.preferredDate && data.preferredDate.indexOf('/') > -1) {
      var partes = data.preferredDate.split('/');
      dataAgendamento = new Date(partes[2], partes[1] - 1, partes[0], 9, 0);
    } else {
      dataAgendamento.setDate(dataAgendamento.getDate() + 1);
      dataAgendamento.setHours(10, 0, 0);
    }
    
    var dataFim = new Date(dataAgendamento.getTime() + (60 * 60 * 1000)); // 1 hora de duração

    calendar.createEvent(tituloEvento, dataAgendamento, dataFim, {
      description: descricaoEvento,
      location: data.bairro + ', ' + data.cidade,
      guests: emailsNotificacao.join(','),
      sendInvites: true
    });

    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Agendamento registrado com sucesso!'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Clique em **Implantar** > **Nova Implantação**.
4. Em "Tipo", escolha **App da Web**.
5. Em "Quem pode acessar", selecione **Qualquer pessoa** (Any).
6. Copie a **URL do App da Web** gerada.
7. No arquivo `script.js` do site, adicione uma chamada `fetch(suaUrlDoAppsScript, { method: 'POST', body: JSON.stringify(lead) })` no envio do formulário.

---

## Opção 3: Cal.com ou Calendly (A Solução Especializada para Duplas)

Se a Gabriella e a Giovana quiserem uma solução completa onde:
- Para **Consulta Veterinária, Vacinas e Exames**, checa **apenas a agenda da Dra. Gabriella**;
- Para **Cat Sitting**, checa **apenas a agenda da Giovana**;
- E os eventos entram sincronizados no Google Calendar de cada uma sem conflito de horário:

### Vantagens do Cal.com (Plano Individual Gratuito):
1. Acesse [cal.com](https://cal.com) ou [calendly.com](https://calendly.com).
2. Conecte as contas do Google Calendar de ambas.
3. Crie os dois tipos de eventos:
   - "Consulta Domiciliar / Vacinação" (Dra. Gabriella)
   - "Cat Sitting / Visita Cuidados" (Giovana)
4. Copie o widget embutido e insira na página do site. O tutor escolhe o dia e horário que já sincroniza com os telefones de ambas e dispara lembretes por e-mail e SMS/WhatsApp!

---

## Como o site já funciona hoje (Imediato & Zero Custo):

No formato atual entregue:
1. O tutor preenche os dados completos do gatinho, região (Guarulhos/SP), serviço e data.
2. O site armazena localmente os dados (`localStorage`).
3. Ao clicar em **"Confirmar Agora via WhatsApp"**, uma mensagem pré-formatada e estruturada com todos os dados da ficha de pré-consulta é aberta diretamente no WhatsApp de atendimento da FELIA.
4. Vocês só precisam responder com 1 mensagem combinando o horário final e adicionar o compromisso na agenda compartilhada do Google!
