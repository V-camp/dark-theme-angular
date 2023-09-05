import { Component, OnInit } from '@angular/core';
import { ThemeEnum } from 'src/app/enums/Theme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public icon: string =  ThemeEnum.ICON_LUA;

  constructor() { }

  ngOnInit(): void {
  }

  public toggle() {
    const theme = document.body.classList.toggle('dark-theme');

    if(theme) {
      return this.icon = ThemeEnum.ICON_SOL;
    }

    return this.icon = ThemeEnum.ICON_LUA;
  }

}
