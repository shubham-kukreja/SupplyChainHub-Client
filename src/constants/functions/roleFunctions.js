export const functions = (
  currentRoleName,
  nextRoleName,
  previousRoleName,
  type
) => {
  const arrayFirst = [
    {
      name: "makeLot()",
      desc:
        "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
    },
    {
      name: "packedLot()",
      desc:
        "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
    },
    {
      name: `forSaleLotBy${currentRoleName}()`,
      desc:
        "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
    },
    {
      name: `sellLotTo${nextRoleName}()`,
      desc:
        "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
    },
    {
      name: `shipLotFrom${currentRoleName}To${nextRoleName}()`,
      desc:
        "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
    },
    {
      name: `add${nextRoleName}()`,
      desc:
        "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
    },
  ];
  const arrayMiddle = [
    {
      name: `payFrom${currentRoleName}To${previousRoleName}()`,
      desc:
        "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
    },
    {
      name: `receivedBy${currentRoleName}()`,
      desc:
        "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
    },
    {
      name: `forSaleLotBy${currentRoleName}()`,
      desc:
        "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
    },
    {
      name: `sellLotTo${nextRoleName}()`,
      desc:
        "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
    },
    {
      name: `shipLotFrom${currentRoleName}To${nextRoleName}()`,
      desc:
        "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
    },
    {
      name: `add${nextRoleName}()`,
      desc:
        "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
    },
  ];
  const arrayLast = [
    {
      name: `payFrom${currentRoleName}To${previousRoleName}()`,
      desc:
        "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
    },
    {
      name: `receivedBy${currentRoleName}()`,
      desc:
        "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
    },
  ];

  switch (type) {
    case 0:
      return arrayFirst;
    case 1:
      return arrayMiddle;
    case 2:
      return arrayLast;
    default:
      return arrayMiddle;
  }
};
