import { Colors, Flekso, Gupka, ModalCMYK, ModalGupka, ModalPantone, ModalRakel, ModalRulon, ModalTesa, Rakel, Rulon, Tesa } from "@/assets";

export const products = [
  {
    id: 1,
    titleKey: "products.items.rolls.title",
    descriptionKey: "products.items.rolls.description",
    image: Rulon,
    modalImage: ModalRulon,
  },
  {
    id: 2,
    titleKey: "products.items.uvColors.title",
    descriptionKey: "products.items.uvColors.description",
    image: Colors,
    modalImage: ModalCMYK,
  },
  {
    id: 3,
    titleKey: "products.items.tesa.title",
    descriptionKey: "products.items.tesa.description",
    image: Tesa,
    modalImage: ModalTesa,
  },
  {
    id: 4,
    titleKey: "products.items.pantone.title",
    descriptionKey: "products.items.pantone.description",
    image: Flekso,
    modalImage: ModalPantone,
  },
  {
    id: 5,
    titleKey: "products.items.rakel.title",
    descriptionKey: "products.items.rakel.description",
    image: Rakel,
    modalImage: ModalRakel,
  },
  {
    id: 6,
    titleKey: "products.items.cleaning.title",
    descriptionKey: "products.items.cleaning.description",
    image: Gupka,
    modalImage: ModalGupka,
  },
];