$(document).ready(function(){

    console.log('Ready')

    //  Busque a data atual e atualize-a no DOM
    var date = new Date()
    let display_date = "Data: " +date.toLocaleDateString("pt-BR",{weekday:"short",year:"numeric",month:"short",day:"numeric"})

    $(document).ready(function () {
        $("#date").html(display_date)
    })

    // Escreva um evento, quando o botão Enviar for clicado
    $('#button').click(function(){

        //  Obtenha o valor do texto da área de texto usando o método 'val()'
        let text_value = $('#text').val()

        //  Converta-o em um objeto JS.
        //  Forneça uma "chave" aqui e escreva o mesmo no arquivo app.py também para extrair dados
        let input_text = {'' : text_value}
        console.log(input_text)

        //  requisição ajax
        $.ajax({

            //  tipo da requisição web
            type : 'POST',

            //  dados a serem enviados no formato JSON
            data : JSON.stringify(),

            //  o tipo de resposta esperado é json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  se tudo funcionar, execute esta função
            success : function(result){

                predicted_emotion = result.da.predicted_emotion
                emo_url = result.data.predicted_emotion_img_url
                
                $("#sentiment").html(predicted_emotion)
                $('#sentiment').css("display", "none");

                $("#emoji").attr('src', emo_url);
                $('#emoji').css("display", "none");
                

            },

            //  se houver algum erro, execute esta função
            error : function(result){

                console.log(result)
            }
        })


        //  limpando a caixa de texto após cada pressionamento de botão
        $('#text').val("")
    })
        
})