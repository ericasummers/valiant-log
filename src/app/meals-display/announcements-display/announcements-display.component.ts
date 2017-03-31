import { Component, OnInit, Input } from '@angular/core';
import { Announcement } from '../../announcement.model';

@Component({
  selector: 'app-announcements-display',
  templateUrl: './announcements-display.component.html',
  styleUrls: ['./announcements-display.component.css']
})
export class AnnouncementsDisplayComponent implements OnInit {
  @Input() childAnnouncementList: Announcement[];

  constructor() { }

  ngOnInit() {
  }

}
