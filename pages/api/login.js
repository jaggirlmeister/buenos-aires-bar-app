export default (req, res) => { 
    console.log('Console Log Backend (Server) ', req.body);

    const { values } = req.body;

    //ACA EN EL MEDIO VAMOS A INTERACTUAR
    //Seteamos la cookie

    res.statusCode = 200;
    res.json({ message: "Bienvenide", email: values.email });
}