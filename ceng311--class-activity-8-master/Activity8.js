$( "#birthday" ).datepicker();

var languages = [
    "Asp", 
    "JavaScript", 
    "Lisp",
    "Perl", 
    "PHP", 
    "Python" 
];


$( "#language" ).autocomplete({
    source: languages 
});

