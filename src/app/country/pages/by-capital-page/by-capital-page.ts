import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuHead } from "../../components/menu-head/menu-head";
import { CountryList } from '../../components/country-list/country-list';
import { SearchInput } from '../../components/search-input/search-input';

@Component({
  selector: 'app-by-capital-page',
  imports: [MenuHead, CountryList,SearchInput],
  templateUrl: './by-capital-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPage { }
