import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
  styleUrls: ['./inline.component.css']
})
export class InlineComponent {

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('graph');

    this.meta.addTags([
      {property: "og:title", content: "The Rock"},
      {property: "og:type", content: "video.movie"},
      {property: "og:url", content: "//www.imdb.com/title/tt0117500/"},
    ], true);
  }
}
