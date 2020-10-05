// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

// Analytic page code   

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-179588372-1', 'auto');
ga('send', 'pageview');

// Event tracking code

// Tracking Contact us
$("#ID_ContactUs").click( function() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'entre_em_contato',
        eventLabel: 'link_externo'
      });
});

// Tracking Download PDF
$("#ID_DownloadPDF").click( function() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'download_pdf',
        eventLabel: 'download_pdf'
      });
});

// Tracking Lorem click
$("#Lorem").click( function() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'analise',
        eventAction: 'ver_mais',
        eventLabel: 'Lorem'
      });
});

// Tracking Ipsum click
$("#Ipsum").click( function() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'analise',
        eventAction: 'ver_mais',
        eventLabel: 'Ipsum'
      });
});

// Tracking Dolor click
$("#Dolor").click( function() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'analise',
        eventAction: 'ver_mais',
        eventLabel: 'Dolor'
      });
});

// Tracking nome input
$( "#nome" ).blur(function() {
  let name = $(this).val();

  if ($.trim(name)!= '') {
    alert('foi')
    // ga('send', {
    //   hitType: 'event',
    //   eventCategory: 'contato',
    //   eventAction: 'nome',
    //   eventLabel: 'preencheu'
    // });
  };
});

// Tracking email input
$( "#email" ).blur(function() {
  let email = $(this).val();

  if ($.trim(email)!= '') {
    ga('send', {
      hitType: 'event',
      eventCategory: 'contato',
      eventAction: 'email',
      eventLabel: 'preencheu'
    });
  };
});

// Tracking telefone input
$( "#telefone" ).blur(function() {
  let telefone = $(this).val();

  if ($.trim(telefone)!= '') {
    ga('send', {
      hitType: 'event',
      eventCategory: 'contato',
      eventAction: 'telefone',
      eventLabel: 'preencheu'
    });
  };
});

// Tracking Dolor click
$("#aceito").click( function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'contato',
    eventAction: 'aceito',
    eventLabel: 'preencheu'
  });
});

// Tracking Dolor click
$("#aceito").click( function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'contato',
    eventAction: 'aceito',
    eventLabel: 'preencheu'
  });
});

$( ".contato" ).submit(function() {
  ga('send', {
    hitType: 'event',
    eventCategory: 'contato',
    eventAction: 'enviado',
    eventLabel: 'enviado'
  });
});