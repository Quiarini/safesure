import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadContatosPage } from './cad-contatos.page';

describe('CadContatosPage', () => {
  let component: CadContatosPage;
  let fixture: ComponentFixture<CadContatosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadContatosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadContatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
