import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-courdetails',
  templateUrl: './courdetails.component.html',
  styleUrls: ['./courdetails.component.css']
})
export class CourdetailsComponent implements OnInit {
  urlSafe: SafeResourceUrl;
  url: string = "../../../assets/images/blog/r.mp4"

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
