import { Component, OnInit } from '@angular/core';
import { ReactorComponentComponent } from './components/reactor-component/reactor-component.component';
import { CommonModule } from '@angular/common';
import { Status } from '../../core/enums/status.enum';
import { ReactorModel } from '../../core/models/reactor.model';
import { Store } from '@ngxs/store';
import { FetchReactorsAction, ReactorsState } from '../../store/reactors';
import { Observable } from 'rxjs';
import { SharedModule } from '../../shared/shared.module';
import { WarningStyle } from '../../core/enums/warningStyle.enum';

@Component({
  selector: 'app-reactor-list-page',
  standalone: true,
  imports: [ReactorComponentComponent, CommonModule, SharedModule],
  templateUrl: './reactor-list-page.component.html',
  styleUrl: './reactor-list-page.component.scss',
})
export class ReactorListPageComponent implements OnInit {
  description =
    'Lorem ipsum dolor sit amet consectetur. Adipiscing non pulvinar placerat lorem ullamcorper magna. ' +
    'Pulvinar bibendum enim eget nullam lacus urna. Consequat lorem lectus imperdiet tincidunt. Orci magnis tempus tempus sit.';

  reactors$!: Observable<ReactorModel[]>;
  WarningStyle = WarningStyle;
  Status = Status;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(new FetchReactorsAction());
    this.reactors$ = this.store.select(ReactorsState.getReactors);
  }
}
