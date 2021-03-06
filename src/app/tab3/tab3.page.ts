import { Component } from '@angular/core';
import { NewsService } from '../shared/news.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor(public newsService: NewsService) {}
  data;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.newsService.getData('top-headlines?country=in').subscribe((res) => {
      this.data = res;
    });
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 2000);
  }
}
