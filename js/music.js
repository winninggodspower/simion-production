function sendEmail(emailTo,subject,body) {
    window.open(`mailto:${emailTo}?subject=${subject}&body=${body}`);
}

function getDetails() {
    const subject = $("input").val(),
        body = $("textarea").val()
        emailTo = 'otitisimeon@gmail.com';

    sendEmail(emailTo,subject,body)
}

$('#sendMail').click(()=>{
    getDetails()
})

$('button').click(()=>{
    
    const subject = 'make the beat for my song',
        emailTo = 'otitisimeon@gmail.com';

    window.open(`mailto:${emailTo}?subject=${subject}`);    
})
