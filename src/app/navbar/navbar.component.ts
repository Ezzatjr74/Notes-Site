import { Component, Input,Output , OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  getuser:any;
  profile;
  constructor(public _ActivatedRoute:ActivatedRoute, private modalService: NgbModal) {
    this.getuser =  sessionStorage.getItem('loginUser');
    this.profile = JSON.parse(this.getuser);
  }
  @Input()  activeroute: any = this._ActivatedRoute.routeConfig?.path;

  open(content: any) {
    this.modalService.open(content);
  }
  removelogin()
  {
    sessionStorage.removeItem('loginUser');
  }


  ngOnInit(): void {
  }

}
