import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportWorkPage } from './report-work.page';

describe('ReportWorkPage', () => {
  let component: ReportWorkPage;
  let fixture: ComponentFixture<ReportWorkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportWorkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportWorkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
