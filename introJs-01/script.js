/*Para comentarios
en bloque en javascript*/
//Comentario de línea
/*Javascript es un lenguaje de programación interpretado orientado a objetos, case sensitive (detecta mayusculas y minusculas) y de tipado débil*/
//alert("Hola mundo"); //Muestra una ventana (alerta) con el texto dentro de las comillas

/*console.log("Hola consola");//Muestra el mensaje dentro de los parentesis en la consola del navegador
document.write("Hola CH46");//Muestra el contenido dentro de las comillas en la página
let nombre;//Declara una variable
nombre=prompt("Ingresa tu nombre: "); //prompt->ventana que permite interactuar con el usuario (ingresar información)
alert("Hola, "+nombre+" Bienvenidx a javascript."); //Muestra una ventana (alerta) con la información dentro de los parentensis (texto entre comillas y variable nombre con el concatenador "+")
console.warn("Advertencia");//Muestra el mensaje dentro de los parentesis como advertencia
console.error("Error");////Muestra el mensaje dentro de los parentesis como error
let chicas=["nom1","nom2","nom3","nom4"];//Variable tipo array (arreglo/tabla)unidimensional
console.table(chicas);//Muestra en la consola la información dentro de la variable "chicas" en una tabla*/
 //Ejemplo/ejercicio con signos
 function descripcionZodiaco(zodiaco)
 {
    switch(zodiaco)
    {
        case "aries": 
            document.write("Aries: 21 de marzo al 19 de abril: ¡Eres de Aires! Gobernado por Marte, planeta relacionado con el dios romano de la guerra, este signo de fuego enciende nuevos comienzos. Bautizado a partir del mito griego del Carnero Dorado, Aries se destaca por la audacia. Emprender y abrir paso a un nuevo camino es típico de los pioneros de este signo que vibran alto, inspiran y se dejan llevar por el impulso, la pasión y la intuición.");
            break;
        
        case "tauro": 
            document.write("Tauro: 20 de abril al 20 de mayo: Reinadas por Venus, cuerpo celeste asociado a la divinidad del amor y la belleza, las personas de este signo conectado con la tierra, son manifestadoras de belleza y abundancia. En sintonía con su cuerpo y con la naturaleza, los taurinos conocen sus placeres y su valor, ¡y lo hacen valer! Si bien el cambio les incomoda, una vez que comienza a correr el toro en su interior, ¡no hay quién lo detenga!");
            break;
        case "geminis":
            document.write("Géminis: 21 de mayo al 20 de junio: Regido por Mercurio, astro vinculado al mensajero de los dioses, este signo intelectual se distingue por sus dones comunicativos. Como el aire que se amolda a las formas sólidas, los geminianos son sumamente adaptables. Inspirado en la constelación de los gemelos, este signo permite tener una opinión y al día siguiente explorar la contraria sin remordimiento. La creatividad, el humor y la frescura también lo caracterizan.");
            break;
        case "cancer":
            document.write("Cáncer: 21 de junio al 22 de julio: Influenciado por la luna, este signo de agua hace a personas sumamente emocionales que nutren y se nutren del hogar y la familia. Como la constelación del cangrejo, los cancerianos protegen sus sentimientos más profundos con un caparazón. La memoria con un tinte de nostalgia y la intuición también delinean su personalidad. ¿Resuena contigo?");
            break;
        case "leo":
            document.write("Leo: 23 de julio al 22 de agosto: Regido por el astro rey, este signo de fuego hace a los leoninos brillar con su esencia creativa e iluminar al prójimo, inspirándolo a rugir a su lado. Como el león que dibujan las estrellas, las personas de este signo se destacan por su gigantesco corazón que irradia confianza y generosidad.");
            break;
        case "virgo":
            document.write("Virgo: 23 de agosto al 22 de septiembre: Reinado por Mercurio, el mismo provee el don de bajar ideas a tierra. No por nada, la agenda y la rutina son mejores amigas de los virginianos, que a pesar de esto, no prescinden de la flexibilidad y son sumamente analíticos. Asociados a la figura de una virgen, buscan la purificación y el perfeccionismo en todos los ámbitos, y por eso tienden a profundizar en rubros como la salud y el bienestar.");
            break;
        case "libra":
            document.write("Libra: 23 de septiembre al 22 de octubre: Gobernados por Venus, los librianos son conocidos por entrar en simbiosis con la estética y por formar alianzas y parejas. El intelecto también es representativo de este signo de aire. Inspirado en la balanza estelar, Libra hace a personas equilibradas que buscan mantener la armonía y la diplomacia. ¿Te sientes identificado?");
            break;
        case "escorpio":
            document.write("Escorpio: 23 de octubre al 21 de noviembre: Regido por Plutón, astro asociado a la deidad del inframundo, este signo de agua hace a personas intuitivas y esotéricas. Debido a sus grandes apegos, el cambio les cuesta, si bien el don de renacer es la particularidad que hace a los escorpianos poderosos. Ellos son magnéticos, seductores y románticos; cuando se enamoran, aspiran a fusionarse. También son muy habilidosos administrando recursos ajenos.");
            break;
        case "sagitario":
            document.write("Sagitario: 22 de noviembre al 21 de diciembre: Gobernado por Júpiter, planeta del padre de los dioses, las personas de este signo fogoso son inspiradoras y grandes maestras. En conexión con la constelación del centauro que dispara su flecha hacia arriba, los más optimistas del Zodíaco apuntan a nuevos horizontes. Fanáticos de los viajes y la aventura, todo lo que implique una expansión mental, como la filosofía o la astrología, ilumina a los sagitarianos.");
            break;
        case "capricornio":
            document.write("Capricornio: 22 de diciembre al 19 de enero: Al compás de Saturno, planeta anillado y dios guardián del tiempo, este signo terrenal caracteriza a personas trabajadoras, estructuradas y disciplinadas que aspiran al éxito y en muchos casos cargan con el deber ser. Su romance con el tiempo las hace amantes de la música. Representados por la constelación de la cabra con cola de pez, los capricornios son todoterreno y siempre van por más.");
            break;
        case "acuario":
            document.write("Acuario: 20 de enero al 18 de febrero: Influenciado por Urano, astro de la deidad del cielo, este signo de aire eleva la intelectualidad. A pesar de su excentricidad, los acuarianos congenian en grupos como nadie. Espejados en las estrellas por una aguatera derramando agua de inmortalidad sobre la Tierra, empatizan con causas mayores y crean comunidad para marchar por cambios trascendentales.");
            break;
        case "piscis":
            document.write("Piscis: 19 de febrero al 20 de marzo: Regido por Neptuno, planeta azul asociado al dios del mar, este signo de agua hace a personas sensibles, intuitivas y altruistas, que diluyen barreras y llevan todo lo que hacen más allá con su extraordinaria imaginación. Los peces nadando en direcciones opuestas en el océano estelar denotan su profundidad, su compasión tras explorar caminos adversos, y su capacidad de fluir.");
            break;
    }
 }

 let nombre=prompt("Ingresa tu nombre: ");
 let signo=prompt("Ingresa tu signo zodiacal: ").toLowerCase(); ;
 //let mensaje=nombre+" tu signo es: "+signo;
 //alert("Eres "+mensaje);
 // Definimos las descripciones para cada signo (en este caso, solo aries por el momento)
let descripcions = {
    aries: "Energía, iniciativa, valentía y liderazgo. (21 de marzo - 19 de abril)",
    tauro: "Estabilidad, perseverancia, sensualidad y practicidad. (20 de abril - 20 de mayo)",
    géminis: "Comunicación, adaptabilidad, curiosidad y dualidad. (21 de mayo - 20 de junio)",
    cáncer:"Emoción, sensibilidad, intuición y protección. (21 de junio - 22 de julio)",
    leo:"Creatividad, generosidad, confianza y liderazgo. (23 de julio - 22 de agosto)",
    virgo:"Análisis, organización, detalle y eficiencia. (23 de agosto - 22 de septiembre) ",
    libra:"Armonía, equilibrio, diplomacia y estética. (23 de septiembre - 22 de octubre)",
    escorpio:"Intensidad, pasión, misterio y transformación. (23 de octubre - 21 de noviembre)",
    sagitario:"Aventurero, optimista, filosófico y extrovertido. (22 de noviembre - 21 de diciembre) ",
    capricornio:"Disciplina, responsabilidad, ambición y pragmatismo. (22 de diciembre - 19 de enero)",
    acuario:"Innovación, independencia, originalidad y humanitarismo. (20 de enero - 18 de febrero)",
    piscis:"Imaginación, sensibilidad, empatía y espiritualidad. (19 de febrero - 20 de marzo)",
    };
    
    // Verificamos si el signo existe en el objeto
    if (descripcions[signo]) {
        let mensaje = "Hola " + nombre + ", tu signo es " + signo + " y tus cualidades son:  " + descripcions[signo];
        alert(mensaje);
        } 
 
descripcionZodiaco(signo);