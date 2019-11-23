import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LastIncidentsPage } from './last-incidents.page';

describe('LastIncidentsPage', () => {
  let component: LastIncidentsPage;
  let fixture: ComponentFixture<LastIncidentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastIncidentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LastIncidentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
