import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[] = [];
  dataLoaded = false;
  filterText = "";

  constructor(private productService: ProductService, 
    private activatedRoute: ActivatedRoute, 
    private toastrService: ToastrService,
    private cartService: CartService) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params => {
      
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts()
      }
    })
  }

  getProducts(){
    //console.log("Api request başladı")
    //Asenkron çalışır
    this.productService.getProducts().subscribe(response => {
     this.products = response.data
     this.dataLoaded = true
     ///console.log("Api request bitti");
   }) 
   //console.log("Metod bitti");
  }

  getProductsByCategory(categoryId:number){

    this.productService.getProductsByCategory(categoryId).subscribe(response => {
     this.products = response.data
     this.dataLoaded = true

   }) 
  }

  addToCart(product:Product){
    if(product.productId === 1){
      this.toastrService.error("Bu ürün sepete eklenemez", "Hata")
    }else{
      this.toastrService.success(product.productName, "Sepete eklendi")
      this.cartService.addToCart(product)
    }
  }

}

