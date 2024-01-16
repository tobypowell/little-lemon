export const reservationsReducer = (state, action) => {
  switch (action.type) {
    case 'createReservation': {
      return {
        ...state,
        reservation: action.reservation,
      };
    }
    case 'displayAvailableTimes': {
      return {
        times: [...action.times],
      };
    }
    default: {
      throw Error('Unkown action: ', +action.type);
    }
  }
};

export const intialState = {
  times: [],
  reservation: {
    bookingDate: '2024-01-01',
    bookingTime: '',
    numOfGuests: 0,
    occasion: 'Birthday',
  },
};
