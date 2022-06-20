import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { IProduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!)
  product? : IProduct
  createForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-z A-Z]+$') , Validators.minLength(5)]),
    price: new FormControl('',[Validators.required, Validators.pattern('[0-9]+$')]),
    desc: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
  })
  submitForm(){
    const product = {
      id: this.id,
      name:  String(this.createForm.value.name),
      desc:  String(this.createForm.value.desc),
      img:  String(this.createForm.value.img),
      price: parseInt(this.createForm.value.price!)
    }    
    this.productService.update(product).subscribe(() =>{
      alert('Thêm thành công')
      this.router.navigateByUrl('/product')
    })
  }
  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  
  ngOnInit(): void {
    this.productService.get(this.id).subscribe( product =>{
      this.product = product
      console.log(product)
    })
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
