import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import {} from '@angular/core';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-home-page',
  imports: [Footer, RouterLink],
  templateUrl: './home-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage { }
