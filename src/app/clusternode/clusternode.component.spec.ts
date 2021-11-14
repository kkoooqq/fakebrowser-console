import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ClusternodeComponent} from './clusternode.component';

describe('ClusternodeComponent', () => {
    let component: ClusternodeComponent;
    let fixture: ComponentFixture<ClusternodeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ClusternodeComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ClusternodeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
