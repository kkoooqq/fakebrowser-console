import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ClusterNodeComponent} from './clusternode.component';

describe('ClusternodeComponent', () => {
    let component: ClusterNodeComponent;
    let fixture: ComponentFixture<ClusterNodeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ClusterNodeComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ClusterNodeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
