import axios from "@/lib/axios";
import {
  Address,
  AddressFormData,
} from "@/features/addresses/types";

class AddressApi {
  async getAddresses(): Promise<Address[]> {
    const response = await axios.get("/addresses/");
    return response.data;
  }

  async createAddress(data: AddressFormData): Promise<Address> {
    const response = await axios.post("/addresses/", data);
    return response.data;
  }

  async deleteAddress(id: number): Promise<void> {
    await axios.delete(`/addresses/${id}/`);
  }

  async setDefaultAddress(id: number): Promise<void> {
    await axios.post(`/addresses/${id}/set-default/`);
  }

  async updateAddress(
    id: number,
    data: AddressFormData
  ): Promise<Address> {
    const response = await axios.put(`/addresses/${id}/`, data);
    return response.data;
  }
}

export default new AddressApi();