import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products?: IProduct[]
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(product => this.products = product)
  }
  onRemove(id: number){
    if(window.confirm('Chắc chắn xóa?')){
      this.productService.remove(id).subscribe(() => {
        this.products = this.products?.filter(product => product.id !== id)
        alert("xóa thành công ")
      })
    }
  }

}
