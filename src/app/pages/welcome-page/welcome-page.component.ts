import { Component, OnInit, Signal } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import * as data from '../../../assets/mocks/images.json';
import * as dataReactor from '../../../assets/mocks/reactors.json';

import { ImageModel } from '../../core/models/image.model';
import { ImageType } from '../../core/enums/imageType.enum';
import { StatusComponent } from './components/status/status.component';
import { ButtonType } from '../../core/enums/buttonType.enum';
import { NgxsModule, Store } from '@ngxs/store';
import {
  FetchReactorsAction,
  FetchReactorsImagesAction,
  FetchReactorsLocationImageAction,
  FetchSafetyStatusAction,
  ReactorsState,
} from '../../store/reactors';
import { SafetyStatusModel } from '../../core/models/safetyStatus.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Status } from '../../core/enums/status.enum';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [SharedModule, StatusComponent, CommonModule],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss',
})
export class WelcomePageComponent implements OnInit {
  ImageType = ImageType;
  ButtonType = ButtonType;
  Status = Status;

  safetyStatus$: Observable<SafetyStatusModel | void> = this.store.select(
    ReactorsState.getReactorsSafetyStatus
  );
  locationImage$: Observable<ImageModel | void> = this.store.select(
    ReactorsState.getReactorsLocationImage
  );
  reactorList$: Observable<ImageModel[]> = this.store.select(
    ReactorsState.getReactorsImageList
  );

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new FetchSafetyStatusAction());
    this.store.dispatch(new FetchReactorsImagesAction());
    this.store.dispatch(new FetchReactorsLocationImageAction());
  }
}
