import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchInput } from '../search-input/search-input';

@Component({
  selector: 'app-country-list',
  imports: [SearchInput],
  templateUrl: './country-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryList { }
