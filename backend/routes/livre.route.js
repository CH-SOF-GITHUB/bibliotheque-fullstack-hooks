import express from 'express';
const router = express.Router();

import { getLivres, getLivreByID, createLivre, updateLivre, deleteLivre, getLivrespagination } from '../controllers/livre.controller.js';



/**
 * @route   GET /api/livres
 * @desc    Get All livres
 * @access  Public
 */
router.get('/', getLivres);

/**
 * @route   GET /api/livres
 * @desc    Get All livres pagination
 * @access  Public
 */
router.get('/liv/pagination', getLivrespagination)

/**
 * @route   POST /api/livres
 * @desc    Ajouter un livre
 * @access  Public
 */
router.post('/', createLivre);

/**
 * @route   GET /api/livres/:id
 * @desc    Renvoyer un livre
 * @access  Public
 */
router.get('/:id', getLivreByID);

/**
 * @route   PUT /api/livres/:id
 * @desc    Modifier un livre
 * @access  Public
 */
router.put('/:id', updateLivre);

/**
 * @route  DELETE /api/livres/:id
 * @desc    Supprimer un livre
 * @access  Public
 */
router.delete('/:id', deleteLivre);

export default router;
