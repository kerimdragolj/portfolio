const sendEmail = (email) => {
    $.ajax({
        method: 'POST',
        url: '//formspree.io/kerim.dragolj@hotmail.com',
        data: email,
        datatype: 'json'
    });
    e.preventDefault();
    $(this).get(0).reset();
    return alertify.success('Message sent');
}