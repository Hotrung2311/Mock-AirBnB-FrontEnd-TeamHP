import {HttpClient} from "@angular/common/http";
import {Order} from "../_model/order";

export class OrderService {
  constructor(private http: HttpClient) { }
  blockOrder(order: Order){
    order.statusOrders = "BLOCK";
    return this.http.post('http://localhost:8080/api/block-order', order);
  }

  getAllOrderOfHost(orderStatus) {
    return this.http.get(`http://localhost:8080/api/findOrderByApartmentAndStatus?statusOrders=${orderStatus}`);
  }

  checkInOrder(idOrder) {
    return this.http.put(`http://localhost:8080/api/checkinOrderApartment/${idOrder}`, null);
  }

  confirmOrder(idOrder) {
    return this.http.put(`http://localhost:8080/api/confirmOrderApartment/${idOrder}`, null);
  }

  cancelOrder(idOrder) {
    return this.http.put(`http://localhost:8080/api/cancelOrderApartment/${idOrder}`, null);
  }

}
