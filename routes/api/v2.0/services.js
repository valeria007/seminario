var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/imc', function(req, res, next) {
	var imc = Number(req.body.masa) / Math.pow(Number(req.body.altura), 2)
	if (imc < 16) {
		res.send(
		{
			"msn" : "Delgadez severa"
		});
	}else if (imc > 16 && imc < 16.99) {
		res.send(
		{
			"msn" : "Delgadez moderada"
		});
	}else if (imc > 17 && imc < 18.49) {
		res.send(
		{
			"msn" : "Delgadez leve"
		});
	}else if (imc >= 18.5 && imc <= 24.99) {
		res.send(
		{
			"msn" : "Normal"
		});
	}else if (imc >= 25 && imc <= 29.99) {
		res.send(
		{
			"msn" : "Sobre Peso"
		});
	}else if (imc >= 30 && imc <= 39.99) {
		res.send(
		{
			"msn" : "Obesidad "
		});
	}else  if(imc >= 40){
		res.send(
		{
			"msn" : "Obesidad morbida"
		});
	}else {
		res.send(
		{
			"msn" : "Error en los datos "
		});
	}
  //res.render('index', { title: 'Express' });
});
/* GET home page. */
router.post('/kcal', function(req, res, next) {
  var information = [
  "Albóndigas	100g	202 kcal	848 kJ",
  "Arroz frito	100g	186 kcal	781 kJ",
  "Arroz integral	100g	362 kcal	1520 kJ",
  "Barbacoa de borrego	100g	170 kcal	714 kJ",
  "Burrito	100g	163 kcal	685 kJ",
  "Canelones	100g	153 kcal	643 kJ",
  "Carne con tomate	100g	240 kcal	1008 kJ",
  "Carne mechada	100g	254 kcal	1067 kJ",
  "Chili con Carne	100g	105 kcal	441 kJ",
  "Chuleta / Costeleta de cerdo	100g	225 kcal	945 kJ",
  "Codillo de cerdo asado	100g	164 kcal	689 kJ",
  "Costillas a la barbacoa / barbecue	100g	292 kcal	1226 kJ",
  "Dal	100g	330 kcal	1386 kJ",
  "Empanada de atún	100g	251 kcal	1054 kJ",
  "Empanada de carne	100g	293 kcal	1231 kJ",
  "Empanada de jamón y queso	100g	234 kcal	983 kJ",
  "Enchiladas	100g	168 kcal	706 kJ",
  "Ensalada César	100g	127 kcal	533 kJ",
  "Ensalada de patata / papa	100g	143 kcal	601 kJ",
  "Espaguetis a la boloñesa	100g	132 kcal	554 kJ",
  "Estofado de ternera / Guisado de carne	100g	95 kcal	399 kJ",
  "Fajita	100g	117 kcal	491 kJ",
  "Fish and Chips / Pescado con papas	100g	195 kcal	819 kJ",
  "Gazpacho	100g	80 kcal	336 kJ",
  "Guiso de arroz	100g	243 kcal	1021 kJ",
  "Guiso de fideos con carne	100g	400 kcal	1680 kJ",
  "Guiso de lentejas	100g	336 kcal	1411 kJ",
  "Guiso de porotos	100g	358 kcal	1504 kJ",
  "Hummus / Puré de garbanzo	100g	177 kcal	743 kJ",
  "Judías estofadas / Frijoles cocidos	100g	94 kcal	395 kJ",
  "Kebab	100g	215 kcal	903 kJ",
  "Lasaña	100g	132 kcal	554 kJ",
  "Lasaña vegetal	100g	177 kcal	743 kJ",
  "Locro	100g	191 kcal	802 kJ",
  "Lomo de cerdo asado	100g	247 kcal	1037 kJ",
  "Lomo en salsa	100g	108 kcal	454 kJ",
  "Macarrones / Fideos a la boloñesa	100g	107 kcal	449 kJ",
  "Macarrones / Fideos con queso	100g	370 kcal	1554 kJ",
  "Milanesa de pescado	100g	275 kcal	1155 kJ",
  "Milanesa de pollo	100g	115 kcal	483 kJ",
  "Milanesa de ternera	100g	215 kcal	903 kJ",
  "Mole poblano	100g	0 kcal	0 kJ",
  "Moussaka	100g	120 kcal	504 kJ",
  "Naan	100g	310 kcal	1302 kJ",
  "Paella	100g	156 kcal	655 kJ",
  "Patatas / Papas alioli	100g	250 kcal	1050 kJ",
  "Patatas / Papas bravas	100g	130 kcal	546 kJ",
  "Pato a la pekinesa	100g	225 kcal	945 kJ",
  "Pizza	100g	267 kcal	1121 kJ",
  "Polenta	100g	85 kcal	357 kJ",
  "Pollo al horno	100g	164 kcal	689 kJ",
  "Pollo asado / rostizado	100g	144 kcal	605 kJ",
  "Pollo relleno	100g	220 kcal	924 kJ",
  "Pozole	100g	0 kcal	0 kJ",
  "Puré de patatas / papas	100g	83 kcal	349 kJ",
  "Raviolis / Ravioles	100g	203 kcal	853 kJ",
  "Rollito de primavera	100g	250 kcal	1050 kJ",
  "Rosbif	100g	111 kcal	466 kJ",
  "Salmorejo	100g	87 kcal	365 kJ",
  "Sopa de guisantes / arvejas / chícharo	100g	75 kcal	315 kJ",
  "Taco	100g	217 kcal	911 kJ",
  "Tamales	100g	200 kcal	840 kJ",
  "Tortilla de patatas / papas	100g	126 kcal	529 kJ"
  ];
  var wordkey = req.body.wordkey;
  var expreg = new RegExp(wordkey);
  var result = information.filter((key) => {
    if (key.search(expreg) > -1) {
      return true
    }
    return false;
  });
  res.send(
    {
      "wordkey" : wordkey,
      "result" : result
    });
});
module.exports = router;
