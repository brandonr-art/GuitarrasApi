import { Component, OnInit, Input } from '@angular/core';
import { Guitarra } from 'src/app/models/guitarra';
import{GuitarraService} from '../../services/guitarra.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(
    public guitarraService:GuitarraService

  ) { }
  @Input() article_guitarra: Guitarra[];
  ngOnInit(): void {
  }

}
