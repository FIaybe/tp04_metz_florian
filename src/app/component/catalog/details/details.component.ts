import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/model/product';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id;
  product: Product;
  constructor(private route: ActivatedRoute, private service: DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.service.getCatalogues().subscribe({
      next: (products) => {
        this.product = products.find((product) => product.id === this.id);
      },
      error: (err) => {
        console.log(err);
      }
    });

    console.log(this.product);

  }

}
