
import mongoose from 'mongoose';

import Livre from '../models/Livre.model.js';

export const getLivres = async (req, res) => { 
    try {
        const liv = await Livre.find().populate('auteurs')
                                        .populate('specialite')
                                        .populate('maised', '-siteweb -email');
          
        res.status(200).json(liv);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getLivrespagination = async(req, res) => {
    try {
        const page = parseInt(req.query.page)
        const pageSize = parseInt(req.query.pageSize)

        // calculate the start and end indexes for the requested page
        const startIndex = (page - 1) * pageSize;
        const endIndex = page * pageSize;

        const livres = await Livre.find().populate('auteurs').populate('specialite').populate('maised', '-siteweb -email');

        //Slice the products array based on the indexes
        const paginatedProducts = livres.slice(startIndex, endIndex);
        // calculate the total number of products
        const totalPages = Math.ceil(livres.length / pageSize);

        // send the paginated products and total pages as API response
        res.json({products:paginatedProducts, totalPages});
    } catch (error) {
        console.log(error.message);
    }
}

export const getLivreByID = async (req, res) => { 
    try {
        const liv = await Livre.findById(req.params.id).populate('auteurs')
                                                        .populate('specialite')
                                                        .populate('maised');

        res.status(200).json(liv);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createLivre = async (req, res) => { 
    const { isbn,titre,annedition,prix,qtestock,couverture,specialite,maised,auteurs } = req.body;
    
    const newLivre = new Livre({ isbn:isbn,titre:titre,annedition:annedition,prix:prix,qtestock:qtestock,couverture:couverture,specialite:specialite,maised:maised,auteurs:auteurs })

    try {  
        await newLivre.save();

        res.status(201).json(newLivre );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateLivre= async (req, res) => {
    const { id } = req.params;
    const { isbn,titre,annedition,prix,qtestock,couverture,specialite,maised,auteurs } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de livre avec un id: ${id}`);

    const liv1 = { isbn:isbn,titre:titre,annedition:annedition,prix:prix,qtestock:qtestock,couverture:couverture,specialite:specialite,maised:maised,auteurs:auteurs, _id: id };

    await Livre.findByIdAndUpdate(id, liv1);

    res.json(liv1);
}

export const deleteLivre = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de livre avec l'ID: ${id}`);

    await Livre.findByIdAndDelete(id);

    res.json({ message: "livre supprimé avec succès." });
}
