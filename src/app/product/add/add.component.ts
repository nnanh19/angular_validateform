import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { IProduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  createForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-z A-Z]+$') , Validators.minLength(5)]),
    price: new FormControl('',[Validators.required, Validators.pattern('[0-9]+$')]),
    desc: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
  })
  submitForm(){
    const product = {
      name:  String(this.createForm.value.name),
      desc:  String(this.createForm.value.desc),
      img:  String(this.createForm.value.img),
      price: parseInt(this.createForm.value.price!)
    }    
    this.productService.create(product).subscribe(() =>{
      alert('Thêm thành công')
      this.router.navigateByUrl('/product')
    })
  }
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  get price(){
    return this.createForm.get('price');
  }
  get name(){
    return this.createForm.get('name');
  }
  get desc(){
    return this.createForm.get('desc');
  }
  get img(){
    return this.createForm.get('img');
  }

}
