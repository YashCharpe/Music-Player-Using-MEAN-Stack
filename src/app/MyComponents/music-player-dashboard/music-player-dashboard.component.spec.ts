import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPlayerDashboardComponent } from './music-player-dashboard.component';

describe('MusicPlayerDashboardComponent', () => {
  let component: MusicPlayerDashboardComponent;
  let fixture: ComponentFixture<MusicPlayerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicPlayerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicPlayerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
