const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    ingredients: {
      type: [String],
      required: true,
    },

    instructions: {
      type: [String],
      required: true,
    },

    nutritionalTable: {
      calories: {
        value: {
          type: Number,
          required: true,
        },
        unit: {
          type: String,
          required: false,
        },
      },

      proteins: {
        value: {
        type: Number,
        required: true,
      },
      unit: {
        type: String,
        required: false,
      },
      },
      fats: {
        value: {
            type: Number,
            required: true,
          },
          unit: {
            type: String,
            required: false,
          },
      },
      carbohydrates: {
        value: {
            type: Number,
            required: true,
          },
          unit: {
            type: String,
            required: false,
          },
      },
      fiber: {
        value: {
            type: Number,
            required: true,
          },
          unit: {
            type: String,
            required: false,
          },
      },
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true, // Agrega campos de fecha: creacion y actualizacion del documento
  }
);

const RecipeModel = mongoose.model(
  "Recipe", // Nombre de la coleccion
  RecipeSchema // Estructura de datos de nuestro modelo
);

module.exports = RecipeModel;
