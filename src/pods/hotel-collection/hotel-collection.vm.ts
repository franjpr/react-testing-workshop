export interface HotelEntityVm {
  id: string;
  picture: string;
  name: string;
  description: string;
  rating: number;
  address: string;
}

export const createDefaultHotelEntityVm = (): HotelEntityVm => ({
  id: '',
  picture: '',
  name: '',
  description: '',
  rating: 0,
  address: '',
});
