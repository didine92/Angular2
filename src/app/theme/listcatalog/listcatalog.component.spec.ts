import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcatalogComponent } from './listcatalog.component';

describe('ListcatalogComponent', () => {
  let component: ListcatalogComponent;
  let fixture: ComponentFixture<ListcatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
