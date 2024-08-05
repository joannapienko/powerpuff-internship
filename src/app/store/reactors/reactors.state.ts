import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ReactorsStateModel } from './reactors-state.model';

import { ReactorStatusService } from '../../core/services/reactor-status.service';
import { ReactorModel } from '../../core/models/reactor.model';
import {
  FetchReactorsAction,
  FetchReactorsImagesAction,
  FetchReactorsLocationImageAction,
  FetchSafetyStatusAction,
} from './reactors.actions';
import { SafetyStatusModel } from '../../core/models/safetyStatus.model';
import { ImageModel } from '../../core/models/image.model';

@State<ReactorsStateModel>({
  name: 'reactors',
  defaults: {
    reactors: [],
    reactorsImages: [],
    reactorsSafetyStatus: undefined,
    locationsImage: undefined,
    loading: false,
    error: false,
  },
})
@Injectable()
export class ReactorsState {
  constructor(private serviceReactors: ReactorStatusService) {}

  @Selector()
  static getReactors(state: ReactorsStateModel): ReactorModel[] {
    return state.reactors;
  }

  @Selector()
  static getReactorsSafetyStatus(
    state: ReactorsStateModel
  ): SafetyStatusModel | void {
    return state.reactorsSafetyStatus;
  }

  @Selector()
  static getReactorsLocationImage(
    state: ReactorsStateModel
  ): ImageModel | void {
    return state.locationsImage;
  }

  @Selector()
  static getReactorsImageList(state: ReactorsStateModel): ImageModel[] {
    return state.reactorsImages;
  }

  @Selector()
  static loading(state: ReactorsStateModel): boolean {
    return state.loading;
  }

  @Selector()
  static error(state: ReactorsStateModel): boolean {
    return state.error;
  }

  @Action(FetchReactorsAction)
  fetchReactors(
    ctx: StateContext<ReactorsStateModel>
  ): Observable<ReactorsStateModel> | Observable<void> {
    ctx.patchState({ loading: true });

    return this.serviceReactors.getReactors().pipe(
      map((response) => {
        return ctx.patchState({ reactors: response, loading: false });
      }),
      catchError((err) => of(ctx.patchState({ error: true, loading: false })))
    );
  }

  @Action(FetchSafetyStatusAction)
  fetchReactorsSafetyStatus(
    ctx: StateContext<ReactorsStateModel>
  ): Observable<ReactorsStateModel> | Observable<void> {
    ctx.patchState({ loading: true });

    return this.serviceReactors.getReactorsSafetyStatus().pipe(
      map((response) => {
        return ctx.patchState({
          reactorsSafetyStatus: response,
          loading: false,
        });
      }),
      catchError((err) => of(ctx.patchState({ error: true, loading: false })))
    );
  }

  @Action(FetchReactorsImagesAction)
  fetchReactorsImages(
    ctx: StateContext<ReactorsStateModel>
  ): Observable<ReactorsStateModel> | Observable<void> {
    ctx.patchState({ loading: true });

    return this.serviceReactors.getReactorImagesList().pipe(
      map((response) => {
        return ctx.patchState({
          reactorsImages: response,
          loading: false,
        });
      }),
      catchError((err) => of(ctx.patchState({ error: true, loading: false })))
    );
  }

  @Action(FetchReactorsLocationImageAction)
  fetchReactorsLocationImage(
    ctx: StateContext<ReactorsStateModel>
  ): Observable<ReactorsStateModel> | Observable<void> {
    ctx.patchState({ loading: true });

    return this.serviceReactors.getReactorLocationImage().pipe(
      map((response) => {
        return ctx.patchState({
          locationsImage: response,
          loading: false,
        });
      }),
      catchError((err) => of(ctx.patchState({ error: true, loading: false })))
    );
  }
}
