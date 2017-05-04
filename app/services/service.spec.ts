import { TestService } from './service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
describe('Service: TestService', () => {
    let service: TestService;

    beforeEach(() => { service = new TestService(); });
    it('should return 3 names', () => {
        let names = service.getnames();
        expect(names).toContain('A');
        expect(names).toContain('B');
        expect(names).toContain('C');
        expect(names.length).toEqual(3);
    });





})