export const formatRole = (role: string): string => {
  switch (role) {
    case "driver":
      return "Водитель";
    case "waiter":
      return "Официант";
    case "cook":
      return "Повар";
    default:
      return "";
  }
};

export const getStatus = (status: boolean): string =>
  status ? "В архиве" : "Активен";

export const validateForm = (
  name: string,
  phone: string,
  date: string
): { type: string; message: string } | void => {
  const phoneRegEx = /\+7\s\(\d\d\d\)\s\d\d\d-\d\d\d\d/i;
  const dateRegEx = /(0?[1-9]|[12][0-9]|3[01])\.(0?[1-9]|[1][0-2])\.\d\d\d\d/i;

  if (!name) {
    return {
      type: "name",
      message: 'Поле "Имя" не может быть пустым.',
    };
  } else if (name.trim().split(" ").length !== 2) {
    return {
      type: "name",
      message: `Поле "Имя" должно содержать два слова.`,
    };
  } else if (!phoneRegEx.test(phone)) {
    return {
      type: "phone",
      message: 'Поле "Номер телефона" не может быть пустым.',
    };
  } else if (!dateRegEx.test(date)) {
    return {
      type: "birthday",
      message: `Поле "Дата рождения" не может быть пустым.`,
    };
  }
};
