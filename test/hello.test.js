describe('Hello1', ()=> { 
    describe('greeting2', ()=>{
      it('인사 문자열을 반환한다', ()=> {
        spyOn(Hello, 'greeting');
        const expectedStr = Hello.message,
              actualStr = Hello.greeting();
    
        expect(actualStr).toBe(expectedStr);
      });
    })
  });