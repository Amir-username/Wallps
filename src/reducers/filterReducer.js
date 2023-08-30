export const filterState = {
  filterType: "",
  value: "",
};

export function filterReducer(state, action) {
  switch (action.type) {
    case "category":
      return {
        ...state,
        filterType: "category",
        value: action.payload,
      };
    case "colors":
      return {
        ...state,
        filterType: "colors",
        value: action.payload,
      };
    case "order":
      return {
        ...state,
        type: "order",
        value: action.payload,
      };
    case "image_type":
      return {
        ...state,
        filterType: "image_type",
        value: action.payload,
      };
    case "orientation":
      return {
        ...state,
        filterType: "orientation",
        value: action.payload,
      };
  }
}
