function manufacture(gifts: string[], materials: string) {
  const seperatedMaterials = materials.split("");

  return gifts.reduce((manufacturedGifts, gift) => {
    return gift.split("").filter((x) => !seperatedMaterials.includes(x))
      .length === 0
      ? [...manufacturedGifts, gift]
      : manufacturedGifts;
  }, [] as string[]);
}
