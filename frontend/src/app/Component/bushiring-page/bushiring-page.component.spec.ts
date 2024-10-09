import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BusHiringComponent } from './bushiring-page.component';

describe('BusHiringComponent', () => {
  let component: BusHiringComponent;
  let fixture: ComponentFixture<BusHiringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusHiringComponent ],
      imports: [ FormsModule ]  
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusHiringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the bus hiring component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default bus size of "mini"', () => {
    expect(component.busSize).toBe('mini');
  });

  it('should have amenities as false by default', () => {
    expect(component.amenities.ac).toBeFalse();
    expect(component.amenities.wifi).toBeFalse();
    expect(component.amenities.tv).toBeFalse();
  });

  it('should book the bus when form is submitted', () => {
    spyOn(window, 'alert');
    component.route = 'New York to Boston';
    component.busSize = 'medium';
    component.amenities = { ac: true, wifi: false, tv: true };

    component.hireBus();
    expect(window.alert).toHaveBeenCalledWith('Bus booked successfully!');
  });

  it('should log the correct booking details', () => {
    const consoleSpy = spyOn(console, 'log');
    component.route = 'Paris to Lyon';
    component.busSize = 'large';
    component.amenities = { ac: true, wifi: true, tv: false };

    component.hireBus();
    expect(consoleSpy).toHaveBeenCalledWith('Booking details:', {
      busSize: 'large',
      amenities: { ac: true, wifi: true, tv: false },
      route: 'Paris to Lyon'
    });
  });
});
