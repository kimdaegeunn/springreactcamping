package com.springreact.blog.controller;

import com.springreact.blog.entity.Member;
import com.springreact.blog.service.MemberService;
import com.springreact.blog.dto.request.member.MemberLoginDto;
import com.springreact.blog.dto.request.member.MemberRegisterDto;
import com.springreact.blog.dto.request.member.MemberUpdateDto;
import com.springreact.blog.dto.response.member.MemberResponseDto;
import com.springreact.blog.dto.response.member.MemberTokenDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/checkId")
    public ResponseEntity<?> checkIdDuplicate(@RequestParam String email) {
        memberService.checkIdDuplicate(email);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PostMapping("/register")
    public ResponseEntity<MemberResponseDto> register(@RequestBody MemberRegisterDto memberRegisterDTO) {
        MemberResponseDto successMember = memberService.register(memberRegisterDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(successMember);
    }

    @PostMapping("/login")
    public ResponseEntity<MemberTokenDto> login(@RequestBody MemberLoginDto memberLoginDTO) {
        MemberTokenDto loginDTO = memberService.login(memberLoginDTO);
        return ResponseEntity.status(HttpStatus.OK).header(loginDTO.getToken()).body(loginDTO);
    }

    @PostMapping("/checkPwd")
    public ResponseEntity<MemberResponseDto> check(
            @AuthenticationPrincipal Member member,
            @RequestBody Map<String, String> request) {
        String password = request.get("password");
        MemberResponseDto memberInfo = memberService.check(member, password);
        return ResponseEntity.status(HttpStatus.OK).body(memberInfo);
    }

    @PutMapping("/update")
    public ResponseEntity<MemberResponseDto> update(
            @AuthenticationPrincipal Member member,
            @RequestBody MemberUpdateDto memberUpdateDTO) {
        MemberResponseDto memberUpdate = memberService.update(member, memberUpdateDTO);
        return ResponseEntity.status(HttpStatus.OK).body(memberUpdate);
    }
}
